import { Fragment, useContext, useState } from "react";
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
      const now = doc.filter(Boolean);
      addClient(now);
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
      Name: user?.name,
      uid: user?.uid,
      Status: 'review',
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
      <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85]" onClick={handleOpen} variant="gradient">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" sm:flex hidden w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
      </svg>
       
      <span className="sm:hidden md:flex">
        Add Collection
      </span>
      
      </button>
      {open && (
        <div className="backdrop-blur-sm fixed left-0 flex z-50 top-0 w-screen h-screen overflow-auto px-5">
          <div className="overflow-auto bg-[#fff] shadow-2xl rounded-[10px] m-auto sm:max-h-[600px] md:max-h-[700] lg:max-h-[900px] w-[800px]">
            <div className="flex items-center shrink-0 p-4 text-[#000] antialiased font-sans text-2xl font-semibold leading-snug">Fill in the form please</div>
            <form
              onSubmit={handleSubmit(handlePostCollection)}
              className="flex flex-col"
            >
              <div className="relative flex-auto p-4 text-[#000] antialiased font-sans text-base font-light leading-relaxed border-t border-t-blue-gray-100 border-b border-b-blue-gray-100 flex flex-col gap-3">
              <p className="text-[#f00] text-center">{errors.Title?.message}</p>
                <input
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                  {...register("Title")}
                  placeholder="Title"
                  required
                  maxLength={50}
                />

                <p className="text-[#f00] text-center">{errors.Category?.message}</p>

                  <select {...register("Category")} 
                  className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500">
                    <option value="" selected disabled hidden>Select a category</option>
                    <option value="Machinery">Machinery</option>
                    <option value="Car Parts">Car Parts</option>
                    <option value="Exhaust">Exhaust</option>
                    <option value="Car Bodies">Car Bodies</option>
                  </select>

                <p className="text-[#f00] text-center">{errors.Number?.message}</p>
                <input
                  type="tel"
                  className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border  text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                  {...register("Number")}
                  placeholder="Contact Number"
                  required
                  maxLength={10}
  
                />

                <p className="text-[#f00] text-center">{errors.Address?.message}</p>

                <input
                  placeholder="Pick up address"
                  {...register("Address")}
                  required
                  maxLength={150}
                  className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all  border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"

                />

                <p className="text-[#f00] text-center">{errors.Description?.message}</p>
                <textarea
                  placeholder="Description"
                  className="peer w-full h-full min-h-[100px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 resize-y disabled:bg-blue-gray-50 disabled:border-0 disabled:resize-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500 !resize-none"
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
                              alt="previewImage"
                              layout="fill"
                              className="rounded-md"
                              src={URL.createObjectURL(file)}
                            />
                          </div>
                          <button
                          className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            size="sm"
                            onClick={() => {
                              removeImage(file.name);
                            }}
                          >
                            <i>X</i>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end shrink-0 flex-wrap p-4 text-blue-gray-500">
                <button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-red-500 hover:bg-red-500/10 active:bg-red-500/30 mr-1"
                >
                  <span>Cancel</span>
                </button>
                <button className="middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-md shadow-green-500/20 hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:cursor-not-allowed" disabled={Object.keys(errors).length || files.length < 1} variant="gradient" color="green" type="submit">
                  <span>Confirm</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default PostModal;
