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

const lectures = [
  {
    title: "Introduction to HTML",
    url: "https://drive.google.com/file/d/1pyae1YVo35qilQVNackCNPrVG89JOAow/preview",
  },
  {
    title: "The Anatomy of an HTML Tag",
    url: "https://drive.google.com/file/d/15WbKj22DEkwMzMx0B3eG-QRw89K_rmsg/preview",
  },
  {
    title: "What we're building - HTML Personal Site",
    url: "https://drive.google.com/file/d/1AK1UV5nS8cr5FfUs6_pdEA8taILkaO0R/preview",
  },
  {
    title: "What is The HTML Boilerplate",
    url: "https://drive.google.com/file/d/1VTBlsyxXIWzkjTGeoDQdo4MMjNlvbnld/preview",
  },
  {
    title: "How to Structure Text in HTML",
    url: "https://drive.google.com/file/d/1USkDP0SSf5_yTwh44UACYkdFdoWB6aVk/preview",
  },
  {
    title: "HTML Lists",
    url: "https://drive.google.com/file/d/17rbvcBFjdvQB8i9NxyEmHMsGNYA6lDV4/preview",
  },
  {
    title: "HTML Image Elements",
    url: "https://drive.google.com/file/d/1Csf-ls8xMsmxUhZwoNVXn5-n5shv08Fc/preview",
  },
  {
    title: "HTML Links and Anchor Tags",
    url: "https://drive.google.com/file/d/1_zaCy1uRK7mDd3S8ThoPcF21Lj4W_mwA/preview",
  },
  {
    title: "HTML Tables",
    url: "https://drive.google.com/file/d/13qgiX4V0OUjqo98SoLQ-jAtFdfcBeAKv/preview",
  },
  {
    title: "Using HTML Tables for Layout",
    url: "https://drive.google.com/file/d/17TPnQzwV_4ckCKZ9M6OEb7ZDPCO2re6F/preview",
  },
  {
    title: "HTML Tables Code Challenge",
    url: "https://drive.google.com/file/d/1c0yD5YHrncXJmr24Oqrr64lyF_rAoazI/preview",
  },
  {
    title: "HTML Tables Solution Walkthrough",
    url: "https://drive.google.com/file/d/1hMbFkUqYrGJfpjs1DeHRBi0kABXa4M-u/preview",
  },
  {
    title: "HTML Forms",
    url: "https://drive.google.com/file/d/1rwGt2b_KpjMtb52Ob05AKoQG_HJcKWfP/preview",
  },
  {
    title: "Forms in Practice - Create a Contact Me Form",
    url: "https://drive.google.com/file/d/1y4Ax4OePE0qFR6TqyNytcduca6Z6laDi/preview",
  },
];

function App() {
  const [urlIndex, setUrlIndex] = useState(0);
  const [openBackdrop, setOpenBackdrop] = useState(false);

  async function switchVideo(index: number) {
    setOpenBackdrop(true);
    setUrlIndex(index);
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
          <div id="example" className="overflow-y-scroll bg-slate-200">
            <List>
              {lectures.map((e, i) => (
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
              src={lectures[urlIndex].url}
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
                  switchVideo(Math.min(urlIndex + 1, lectures.length - 1))
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
