import React, { useEffect } from "react";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchContacts,
  fetchDeleteContact,
} from "../../redux/features/contact.reducer";
import AddContact from "./AddContact";

const Contacts = () => {
  const loading = useSelector((state) => state.contacts.loading);

  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <AddContact />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((item) => {
                return (
                  <TableRow
                    key={item._id}
                    style={{ textAlign: "center", margin: "auto" }}
                  >
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.desc}</TableCell>
                    <TableCell>{item.number}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          dispatch(fetchDeleteContact(item._id));
                        }}
                      >
                        ❌
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default Contacts;
