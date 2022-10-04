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
import * as yup from 'yup';
import {yupResolver } from '@hookform/resolvers/yup'
import "yup-phone"


const PostModal = ({ addClient }) => {
  const [open, setOpen] = useState(false);
  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const { user } = useContext(CollectBrisbaneContext);

  const schema = yup.object().shape({
    Title: yup.string().trim().min(5).max(50).required(),
    Category: yup.string().trim().min(2).max(50).required(),
    Number: yup.string().trim().phone("AU").min(10).max(10).required(),
    Address: yup.string().trim().min(5).max(150).required(),
    Description: yup.string().trim().min(50).max(500).required()
  })

  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const addClientMutation = useMutation(UploadImagesAndCollection, {
    onSuccess: (doc) => {
      addClient(doc);
      setOpen(false);
    },
  });


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

  const removeSpace = (item) => item.replace(/\s+/g, " ");

  const handlePostCollection = async (data) => {
    if (files.length < 1 || files.length > 5) {
      alert('Please upload at least 1-5 Png or jpg or jpg. its required');
      return;
    };
    const checkDes = removeSpace(data.Description);
    const checkTit = removeSpace(data.Title);
    const checkCat = removeSpace(data.Category);
    const checkAdr = removeSpace(data.Address);
    const checkNum = removeSpace(data.Number);
    const filesToUpload = files;
    
    if (checkTit.length < 5 || checkNum.length > 50 || checkTit == "")  {
      alert('Title is required and must be at least 5 characters');
      return;
    };
    if (checkCat.length < 2 || checkCat.length > 50 || checkCat == "") {
      alert('Category is required and must be at least 2 characters');
      return;
    };
    if (checkNum.length !== 10 && !checkNum.match(/^0[0-9]{9}$/) || checkNum == "") {
      alert('Contact number is required and must be AU region format & must be at least 10 characters');
      return;
    };
    if (checkAdr.length < 5 || checkAdr.length > 150 || checkAdr == "") {
      alert('Address is required and must be at least 5 characters');
      return;
    };
    if (checkDes.length < 50 || checkDes.length > 500 || checkDes == "") {
      alert('Description is required and must be at least 50 characters');
      return;
    };
    reset();
    setFile([]);
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
    addClientMutation.mutate({ images: filesToUpload, CollectionToPost });
    return;
  };

  const handleOpen = () => {
    setFile([]);
    reset();
    setOpen(!open);
  }

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Add Collection
      </Button>
      {open && (
        <div className="backdrop-blur-sm fixed left-0 flex z-50 top-0 w-screen h-screen overflow-auto px-5">
          <div className="overflow-auto bg-[#fff] shadow-2xl rounded-[10px] m-auto sm:max-h-[600px] md:max-h-[700] lg:max-h-[900px] w-[800px]">
            <DialogHeader size="xl">Fill in the form please</DialogHeader>
            <form
              onSubmit={handleSubmit(handlePostCollection)}
              className="flex flex-col"
            >
              <DialogBody divider className="flex flex-col gap-3">
              <p className="text-[#f00] text-center">{errors.Title?.message}</p>
                <Input
                  {...register("Title")}
                  label="Title"
                  required
                  maxLength={50}
                />

                <p className="text-[#f00] text-center">{errors.Category?.message}</p>
                <Input
                  {...register("Category")}
                  label="Category"
                  required
                  maxLength={50}
                />

                <p className="text-[#f00] text-center">{errors.Number?.message}</p>
                <Input
                  type="tel"
                  {...register("Number")}
                  label="Contact Number"
                  required
                  maxLength={10}
  
                />

                <p className="text-[#f00] text-center">{errors.Address?.message}</p>

                <Input
                  label="Pick up address"
                  {...register("Address")}
                  required
                  maxLength={150}

                />

                <p className="text-[#f00] text-center">{errors.Description?.message}</p>
                <Textarea
                  label="Description"
                  {...register("Description")}
                  required
                  maxLength={500}

                />


                <div className="p-3 w-full relative bottom-3 rounded-md">
                  <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">
                    {message}
                  </span>
                  <div className="h-32 w-full m-auto relative border-2 items-center rounded-md cursor-pointer bg-gray-300 border-gray-400 border-dotted">
                    <input
                      type="file"
                      required
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
                <Button className="disabled:cursor-not-allowed" disabled={Object.keys(errors).length || files.length < 1} variant="gradient" color="green" type="submit">
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
