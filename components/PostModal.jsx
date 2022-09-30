import { Fragment, useContext, useState } from "react";
import {
  Button,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Input,
  IconButton,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { UploadImagesAndCollection } from "@/lib/db";
import { serverTimestamp } from "firebase/firestore";
import { CollectBrisbaneContext } from "@/context/CollectBrisbane";
import { useMutation } from "@tanstack/react-query";

const initialValues = {
  title: "",
  number: "",
  description: "",
  address: "",
  category: "",
};

const PostModal = ({ addClient }) => {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [formValues, SetFormValues] = useState(initialValues);
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const { user } = useContext(CollectBrisbaneContext);
  const addClientMutation = useMutation(UploadImagesAndCollection, {
    onSuccess: (doc) => {
      addClient(doc);
      SetFormValues(initialValues);
      setFile([]);
      setOpen(false);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFile = (e) => {
    setMessage("");
    let file = e.target.files;
    for (let i = 0; i < file.length; i++) {
      if (files.length == 5) return;
      const fileType = file[i]["type"];
      const validImageTypes = ["image/jpg", "image/jpeg", "image/png"];
      if (validImageTypes.includes(fileType)) {
        const size = Math.round(file[i].size / 1024);
        if (size > 2000) {
          setMessage("file size is too big. max size is 2Mb");
          return;
        }
        if (files.find((x) => x.name === file[i].name)) {
          setMessage("image already exists");
          return;
        }
        setFile([...files, file[i]]);
      } else {
        setMessage("only images accepted");
      }
    }
  };

  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i));
  };

  const validate = (item) => item.replace(/\s+/g, " ").trim();

  const handlePostCollection = async () => {
    if (files.length < 1 || files.length > 5) return;
    const checkDes = validate(formValues.description);
    const checkTit = validate(formValues.title);
    const checkCat = validate(formValues.category);
    const checkAdr = validate(formValues.address);
    const checkNum = validate(formValues.number);
    if (checkDes.length < 30 || checkDes.length > 500) return;
    if (checkAdr.length < 5 || checkAdr.length > 150) return;
    if (checkCat.length < 2 || checkCat.length > 50) return;
    if (checkTit.length < 5 || checkNum.length > 50) return;
    if (checkNum.length !== 10 && !checkNum.match(/^0[0-9]{9}$/)) return;

    const CollectionToPost = {
      Title: checkTit?.slice(0, 50),
      Category: checkCat?.slice(0, 50),
      Description: checkDes?.slice(0, 500),
      Address: checkAdr?.slice(0, 150),
      Number: checkNum?.slice(0, 10),
      createdAt: serverTimestamp(),
      email: user?.email,
      uid: user?.uid,
    };

    addClientMutation.mutate({ images: files, CollectionToPost });
    return;
  };

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Add Clients
      </Button>
      {open && (
        <div className="backdrop-blur-sm fixed left-0 flex z-50 top-0 w-screen h-screen overflow-auto px-5">
          <div className="overflow-auto bg-[#fff] shadow-2xl rounded-[10px] m-auto sm:max-h-[600px] md:max-h-[700] lg:max-h-[900px] w-[800px]">
            <DialogHeader size="xl">Fill in the form please</DialogHeader>
            <form
              onSubmit={handleSubmit(handlePostCollection)}
              className="flex flex-col"
            >
              <DialogBody divider className="flex flex-col">
                <Input
                  label="Title"
                  value={formValues.title}
                  onChange={handleInputChange}
                  required
                  minLength={5}
                  maxLength={50}
                  name="title"
                />
                <span className="text-end relative bottom-1">
                  {formValues.title.length}/50
                </span>
                <Input
                  label="Category"
                  value={formValues.category}
                  onChange={handleInputChange}
                  name="category"
                  required
                  minLength={2}
                  maxLength={50}
                />
                <span className="text-end relative bottom-1">
                  {formValues.category.length}/50
                </span>

                <Input
                  type="tel"
                  pattern="^0[0-9]{9}$"
                  label="Contact Number"
                  value={formValues.number}
                  onChange={handleInputChange}
                  name="number"
                  required
                  minLength={10}
                  maxLength={10}
                />
                <span className="text-end relative bottom-1">
                  {formValues.number.length}/10
                </span>

                <Input
                  label="Pick up address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  name="address"
                  required
                  minLength={5}
                  maxLength={150}
                />
                <span className="text-end relative bottom-1">
                  {formValues.address.length}/150
                </span>

                <Textarea
                  label="Description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  name="description"
                  required
                  minLength={50}
                  maxLength={500}
                />
                <span className="text-end relative bottom-3">
                  {formValues.description.length}/500
                </span>

                <div className="p-3 w-full relative bottom-3 rounded-md">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                  <div className="h-32 w-full m-auto relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                    <input
                      {...register("files[]", {
                        required: true,
                        minLength: 1,
                        maxLength: 5,
                      })}
                      type="file"
                      value={formValues.files}
                      name="files[]"
                      onChange={handleFile}
                      disabled={files.length == 5}
                      className="h-full w-full disabled:cursor-not-allowed 
                                    bg-green-200 opacity-0 z-10 absolute"
                      multiple="multiple"
                      minLength={1}
                      maxLength={5}
                    />
                    <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                      <div className="flex flex-col">
                        <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                        <span className="text-[12px]">{`Drag and Drop a file - jpeg png jpg only - Max-Size is 2MB`}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-2 overflow-auto p-3 mt-2 w-full h-[160px]">
                    {files.map((file, key) => {
                      return (
                        <div
                          key={key}
                          className="p-3 flex-row flex gap-1 w-[200px] h-full "
                        >
                          <div className="h-[100px] relative w-[200px]">
                            <Image
                              layout="fill"
                              className="rounded-md"
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <IconButton
                            size="sm"
                            onClick={() => {
                              removeImage(file.name);
                            }}
                          >
                            <i>X</i>
                          </IconButton>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" type="submit">
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PostModal;
