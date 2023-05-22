import React from 'react'
import './sidebar.css'

import CalendarIcon from "../assets/images/calendar.png";
import KeepIcon from "../assets/images/keep.png";
import TasksIcon from "../assets/images/tasks.png";
import ContactsIcon from "../assets/images/contacts.png";
import MapsIcon from "../assets/images/maps.png";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

const apps = [
  {
    icon: CalendarIcon,
    title: "Calendar",
  },
  {
    icon: KeepIcon,
    title: "Keep",
  },
  {
    icon: TasksIcon,
    title: "Tasks",
  },
  {
    icon: ContactsIcon,
    title: "Contacts",
  },
  {
    icon: MapsIcon,
    title: "Maps",
  },
];

const Sidebar = () => {
  return (
    <>
    <div className="sidebar" style={{ width: 58.5 }}>
      {apps.map((app) => (
        <div className="sidebar__icon" style={{ width:36}}>
          <IconButton>
            <Tooltip title={app.title}>
              <img src={app.icon} alt={app.title} />
            </Tooltip>
          </IconButton>
        </div>
        ))}
        <div className="sidebar__divider" style={{ width: 20}}></div>
        <IconButton>
          <Tooltip title={"Get Add-ons"}>
            <AddIcon style={{ color: "black" }} />
          </Tooltip>
        </IconButton>
    </div>
    
    </>
  )
}

export default Sidebar