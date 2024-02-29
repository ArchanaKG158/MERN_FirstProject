import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "Archana",
    email: "ydreghorn0@samsung.com",
    skills: "MERN",
    address: " Mangalore",
    image:
      "https://instacaptionsforall.in/wp-content/uploads/2023/11/60-1-1024x1024.jpg",
  },
  {
    id: 2,
    name: "Krishna",
    email: "krishorn0@samsung.com",
    skills: "Concrete",
    address: " Bangalore",
    image:
      "https://gyanvaan.com/wp-content/uploads/2023/05/awesome-dp-for-boys-single-3.jpg",
  },
  {
    id: 3,
    name: "Anitha",
    email: "anithaorn0@samsung.com",
    skills: "Tailor",
    address: " Chennai",
    image:
      "https://photosfile.com/wp-content/uploads/2022/04/Girl-Attitude-DP-75.jpeg",
  },
  {
    id: 4,
    name: "Tonsy",
    email: "ytonghorn0@samsung.com",
    skills: "Accounts",
    address: " Paris",
    image:
      "https://c4.wallpaperflare.com/wallpaper/238/481/192/beautiful-girl-picture-2560x1600-wallpaper-preview.jpg",
  },
  {
    id: 5,
    name: "John Roy",
    email: "john@samsung.com",
    skills: "MERN",
    address: " Europe",
    image:
      "https://1.bp.blogspot.com/-FMGGRUm8zGw/YEScAzM9FCI/AAAAAAAAim0/7cIwZuFLkWo5zNYSK4G20d5DfzggUMj2QCLcBGAsYHQ/s16000-rw/Cute%2BLittle%2BGirl%2BDP%2Bfor%2BWhatsApp%2Band%2BFacebook%2BProfile%2B2021%2B%252891%2529.jpg",
  },
  {
    id: 6,
    name: "Smith",
    email: "smithhorn0@samsung.com",
    skills: "MERN",
    address: " England",
    image:
      "https://instacaptionsforall.in/wp-content/uploads/2023/11/85-1-1024x1024.jpg",
  },
  {
    id: 7,
    name: "Robert",
    email: "robert@samsung.com",
    skills: "CS and IS",
    address: " America",
    image:
      "https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg",
  },
  {
    id: 8,
    name: "Uday",
    email: "Uday@samsung.com",
    skills: "Scans",
    address: " Bangalore",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/655/375/desktop-wallpaper-121-whatsapp-dp-boy-stylish-boy-dp.jpg",
  },
  {
    id: 9,
    name: "Ajith",
    email: "ghorn0@samsung.com",
    skills: "Sounds",
    address: " Kundapura",
    image:
      "https://pics.craiyon.com/2023-07-11/830372684bde440a93c1f113b66d1050.webp",
  },
  {
    id: 10,
    name: "Ashwini",
    email: "ydreghorn0@samsung.com",
    skills: "FAST",
    address: " Bangalore",
    image:
      "https://e1.pxfuel.com/desktop-wallpaper/216/651/desktop-wallpaper-50-hidden-face-girls-hidden-dp.jpg",
  },
];

export default function BasicTable() {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}
      >
        Back
      </button>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Names</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Skills</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Avatar sx={{ width: 55, height: 55 }} src={row.image}></Avatar>
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.skills}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
