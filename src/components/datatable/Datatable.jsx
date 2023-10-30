import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";


const Datatable = () => {

  const [data, setData] = useState([]);

  const getOrderslist = async () => {

    try{
      debugger;
      let res = await axios.get('api/getorders/');
      const dataWithIds = res.data.map((item, index) => ({ ...item, id: index + 1 }));
      setData(dataWithIds);
    }
    catch(error){
      debugger;
        alert('data not getting')
    }
    
  }



  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const actionColumn = [
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <Link to="/users/test" style={{ textDecoration: "none" }}>
    //           <div className="viewButton">View</div>
    //         </Link>
    //         <div
    //           className="deleteButton"
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Delete
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];

  useEffect (()=>{
    getOrderslist();
  },{})

  return (
    <div className="datatable">
      <div className="datatableTitle">
       Orders List
        {/* <Link to="/users/new" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        getRowId={(row) => row.id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
