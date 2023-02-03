import { useContext } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import { AppContext } from "../pages";



export default function Snackbar() {
  const { alert } = useContext(AppContext);

  return (
    <>
      {alert && (
        <MuiSnackbar
          open={true}
          autoHideDuration={2000}
          message={alert.message}
        />
      )}
    </>
  );
}
