import React from 'react'
import './header.css'
import { IconButton, Tooltip } from "@mui/material";
import Star from '@mui/icons-material/GradeOutlined';
import logo from "../assets/images/logo.png";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MeetOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Avatar} from "@mui/material";
import LockIcon from "@mui/icons-material/LockOutlined";

const title = "Untitled document";
const toolBarOptions = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Extensions",
  "Help",
];

const Header = () => {
  return (
    <>
    <div className='header_container'>
    <div className="toolbarTop__left">
      <div className="toolbarTop__logo">
        <Tooltip title={"Docs home"}>
          <img src={logo} alt="logo" />
        </Tooltip>
      </div>
      <div className="toolbarTop__title_and_tools">
        <div className="toolbarTop__title">
          <span className="hide">
            {title}
          </span>
          <Tooltip title={"Rename"}>
            <input
              id="title"
              type="text"
              name="title"
              value={title}
            />
          </Tooltip>
          <IconButton style={{ padding: 4 }}>
            <Tooltip title={"Star"}>
              <Star fontSize={"small"} />
            </Tooltip>
          </IconButton>
        </div>
        <div className="toolbarTop__tools">
          {toolBarOptions.map((toolBarOption) => (
            <div className="toolbarTop__tool">{toolBarOption}</div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="toolbarTopRight">
      <Tooltip title="Open comment history (⌘+Option+Shift+A)">
        <IconButton style={{ marginRight: 8 }}>
          <CommentOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746" }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Join a call here or present this tab to the call">
        <IconButton style={{ borderRadius: 21, marginRight: 10}}>
          <MeetOutlinedIcon
            fontSize={"medium"}
            style={{ color: "#444746", fontSize: 30 }}
          />
          <ArrowDropDownIcon fontSize={"medium"} style={{ color: "#444746" }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Private to only me">
        <button className="toolbarTopRight__share">
          <LockIcon
            
            fontSize={"small"}
            style={{ fontSize: 18, marginRight: 8, background:"none"}}
          />
          <p className="toolbarTopRight__share_text">Share</p>
        </button>
      </Tooltip>
      <Tooltip title="abc@gmail.com">
        <Avatar
          style={{ cursor: "pointer" }}
          sx={{ width: 36, height: 36 }}
          alt="User avatar"

        >R
        </Avatar>
      </Tooltip>
    </div>
    </div>
</>
  )
}

export default Header