import { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { AppContext } from "../pages";
import styles from "./Spinnerbackdrop.module.css";

export default function SpinnerBackdrop() {
  const { loading } = useContext(AppContext);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: 1000,
      }}
      open={loading}
    >
      <div className={styles["lds-heart"]}>
        <div></div>
      </div>
    </Backdrop>
  );
}
