import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Drawer from "@mui/material/Drawer";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import "./App.css";
import lectures from "./assets/Constants";

function App() {
  const [urlIndex, setUrlIndex] = useState(0);
  const [lectureIndex, setLectureIndex] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  async function switchVideo(index: number) {
    setOpenBackdrop(true);
    setUrlIndex(index);
  }

  async function switchLecture(index: number) {
    setOpenBackdrop(true);
    setLectureIndex(index);
  }

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={() => {}}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex w-screen h-screen">
        <Drawer
          sx={{
            width: "20vw",
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "20vw",
              boxSizing: "border-box",
            },
            overflow: "hidden",
          }}
          variant="persistent"
          anchor="left"
          open={true}
        >
          <div className="h-[3rem] bg-slate-600 flex justify-center items-center text-white">
            <div
              className="cursor-pointer"
              onClick={() =>
                switchLecture(
                  (lectureIndex + lectures.length - 1) % lectures.length
                )
              }
            >
              <ArrowCircleLeftRoundedIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="mx-[3rem] my-[0.5rem] text-[1.5rem]">
              {lectures[lectureIndex].title}
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                switchLecture((lectureIndex + 1) % lectures.length)
              }
            >
              <ArrowCircleRightRoundedIcon style={{ fontSize: "2rem" }} />
            </div>
          </div>
          <div id="example" className="overflow-y-scroll bg-slate-200">
            <List>
              {lectures[lectureIndex].data.map((e, i) => (
                <ListItem
                  key={e.url}
                  disablePadding
                  onClick={() => switchVideo(i)}
                  className={`${i == urlIndex ? "bg-black" : ""}`}
                >
                  <ListItemButton>
                    <ListItemIcon className={`pl-[1rem]`}>
                      <div className={`${i == urlIndex ? "text-white" : ""}`}>
                        {i + 1}
                      </div>
                    </ListItemIcon>
                    <ListItemText
                      primary={e.title}
                      className={`${i == urlIndex ? "text-white" : ""}`}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <div className="w-[80vw] bg-slate-300">
          <div className="h-[8vh] mb-[2vh]"></div>
          <div className="w-[80vw] flex justify-center items-center">
            <iframe
              src={lectures[lectureIndex].data[urlIndex].url}
              className="w-[60vw] aspect-[16/9] rounded-[1rem]"
              onLoad={() => setOpenBackdrop(false)}
              allowFullScreen={true}
            />
          </div>
          <div className="flex justify-between mx-[10vw] mt-[1rem]">
            <div className="w-[5vw] flex justify-center items-center">
              <button onClick={() => switchVideo(Math.max(urlIndex - 1, 0))}>
                <ArrowCircleLeftRoundedIcon style={{ fontSize: "3rem" }} />
              </button>
            </div>
            <div className="w-[5vw] flex justify-center items-center">
              <button
                onClick={() =>
                  switchVideo(
                    Math.min(
                      urlIndex + 1,
                      lectures[lectureIndex].data.length - 1
                    )
                  )
                }
              >
                <ArrowCircleRightRoundedIcon style={{ fontSize: "3rem" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
