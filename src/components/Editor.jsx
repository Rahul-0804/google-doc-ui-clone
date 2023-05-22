import UTurnLeftIcon from "@mui/icons-material/UTurnLeft";
import SpellcheckOutlinedIcon from "@mui/icons-material/SpellcheckOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useState } from "react";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { GoBold } from "react-icons/go";
import { EditorState, RichUtils } from "draft-js";
import './editor.css'


const Editor=()=> {
  const [fontSize, setFontSize] = useState("11");
  return (
    <header className="editorToolbar">
      <div className="editorToolbar__tools">
        <div className="editorToolbar__left">
          <div
            className="editorToolbar__tool"
          >
            <UTurnLeftIcon
              style={{
                transform: "rotate(90deg)",
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
          >
            <UTurnLeftIcon
              style={{
                transform: "rotate(-90deg) rotateY(180deg)",
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <LocalPrintshopOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <SpellcheckOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <ImagesearchRollerOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool editorToolbar__tool_multi-child">
            <p className="editorToolbar__tool_text">100%</p>
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool editorToolbar__tool_multi-child">
            <p className="editorToolbar__tool_text">Normal text</p>
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool editorToolbar__tool_multi-child"
            style={{ width: 85 }}
          >
            <p className="editorToolbar__tool_text">Arial</p>
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}}/>
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <RemoveOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <input
            type="text"
            value={fontSize}
            className="editorToolbar__fontSize"
          />
          <div className="editorToolbar__tool">
            <AddOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool"
        
          >
            <GoBold
              style={{
                color: "#444444",
                fontSize: 15,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
          >
            <FormatItalicOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div
            className="editorToolbar__tool"
          >
            <FormatUnderlinedOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <FormatColorTextOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <BorderColorIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <InsertLinkIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <AddCommentOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <ImageOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <FormatAlignLeftIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}} />
          </div>
          <div className="editorToolbar__tool">
            <FormatLineSpacingIcon
              fontSize="small"
              style={{
                color: "#444444",
                fontSize: 14,
              }}
            />
          </div>
          <div className="editorToolbar__tool">
            <ChecklistIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
               <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}} />
          </div>
          <div className="editorToolbar__tool">
            <FormatListBulletedIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}

            />
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3"}} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div className="editorToolbar__tool">
            <MoreVertIcon
              style={{
                color: "#444444",
                fontSize: 18,
              }}
            />
          </div>
        </div>

        <div className="editorToolbar__right">
          <div className="editorToolbar__tool">
            <EditOutlinedIcon
              style={{
                color: "#444444",
                fontSize: 18,
                marginLeft: 4,
                marginRight: 9,
              }}
            />
            <p style={{color: "#000000B3",fontFamily:"GoogleSans", fontWeight: 600, fontSize: "14px"}}>Editing</p>
            <ArrowDropDownOutlinedIcon fontSize="small" style={{color: "#000000B3", marginLeft: "30px"}} />
          </div>
          <div className="editorToolbar__partition"></div>
          <div
            className="editorToolbar__tool"
          >
              <ExpandMoreOutlinedIcon
                style={{
                  color: "#444444",
                  fontSize: 18,
                }}
              />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Editor;
