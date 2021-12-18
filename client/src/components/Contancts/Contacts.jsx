import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, TextField,
} from '@mui/material'

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      name: "Lorem ipsum dolor",
      createdOn: Date(),
      id: 2,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "sit amet, consectetur adipisicing",
      createdOn: Date(),
      id: 1,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: " earum eos explicabo facilis",
      createdOn: Date(),
      id: 3,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: " impedit, molestiae odit",
      createdOn: Date(),
      id: 4,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "provident, quasio",
      createdOn: Date(),
      id: 5,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "repellat repudiandae similique ullam?",
      createdOn: Date(),
      id: 6,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: " Iusto optio,",
      createdOn: Date(),
      id: 7,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "Accusantium animi cum deserunt",
      createdOn: Date(),
      id: 8,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "ea eaque earum eos error et",
      createdOn: Date(),
      id: 9,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
    {
      name: "explicabo fuga in ipsa",
      createdOn: Date(),
      id: 10,
      city: "Baghdad",
      car: "Ford",
      address: "loremIpsum 78",
    },
  ]);

  const handleRemoveItem = (i) => {
    setContacts(contacts.filter((contact) => contact.id !== i));
  };

  const handleEditItem = (id) => {
    const edit = contacts.find(item => item.id === id)
    console.log(edit)
  };

  const handleAddItem = () => {
    setContacts([{
      ...contacts,

    }])
  };

  return (
    <TableContainer>
      <TableRow>
        <TableCell><TextField label="Name"/></TableCell>
        <TableCell><TextField label="Created On"/></TableCell>
        <TableCell><TextField label="City"/></TableCell>
        <TableCell><TextField label="Car"/></TableCell>
        <TableCell><TextField label="Address"/></TableCell>
        <TableCell><Button>Add</Button></TableCell>
      </TableRow>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Created On</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Car</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.createdOn}</TableCell>
                <TableCell>{item.city}</TableCell>
                <TableCell>{item.car}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditItem(item.id)}>✍🏻</Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleRemoveItem(item.id)}>🗑</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Contacts;
