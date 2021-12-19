import React, { useState } from "react";
import {
  Button,
  TableCell,
  TableContainer,
  TableRow,
  TextField
} from '@mui/material'
import { useDispatch } from "react-redux";
import { fetchAddContact } from "../../redux/features/contact.reducer";

const AddContact = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handlePostName = (e) => setName(e.target.value);
  const handlePostDesc = (e) => setDesc(e.target.value);
  const handlePostNumber = (e) => setNumber(e.target.value);
  const handleAddContact = () => {
    dispatch(fetchAddContact({ name, desc, number }));
    setNumber("");
    setDesc("");
    setName("");
  };
  return (
   <TableContainer>
     <TableRow>
       <TableCell>
         <TextField
           type="text"
           value={name}
           placeholder=" название продукта"
           label=" название продукта"
           onChange={handlePostName}
         />
       </TableCell>
       <TableCell>
         <TextField
           type="text"
           value={desc}
           placeholder=" Description"
           label="Description"
           onChange={handlePostDesc}
         />
       </TableCell>
       <TableCell>
         <TextField
           type="text"
           value={number}
           placeholder=" Number"
           label="Number"
           onChange={handlePostNumber}
         />
       </TableCell>
       <TableCell>
         <Button onClick={handleAddContact}>Add</Button>
       </TableCell>
     </TableRow>
   </TableContainer>
  );
};

export default AddContact;
