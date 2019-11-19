import React from "react";
import Anuncio from "./Anuncio/Anuncio";
import styled from "styled-components";
import Side from "./SideMenu/Sidemenu";
import { useQuery } from "../queryHelper";
import { useSelector, useDispatch } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import Search from '../Searchbar/Searchbar'
import axios from "axios";

const Layout = styled.main`
  margin-top: 4rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 80%;
  margin: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: "4rem",
    paddingBottom: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  content: {
    flex: "80%",
    margin: "2rem"
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gridColumnGap: "15px",
      gridRowGap: "10px"
    }
  },
  ordenarBtn: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
  }
}));

const Dashboard = props => {
  const classes = useStyles();
  const query = useQuery();
  const userId = useSelector(state => state.user.userId);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(null);
  const [posts, setPosts] = React.useState([]);
  const [sidebar, setSidebar] = React.useState(false);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    props.openSideBar();
  };

  const fetchAnuncios = (query) => {
      const url =
        query
          ? `http://localhost:3010/api/v1/properties?${query}`
          : "http://localhost:3010/api/v1/properties/";
      axios
        .get(url)
        .then(res => {
          setPosts(res.data);
        })
        .catch(err => {
          //dispatch(getAnunciosFail(error))
          console.log(err);
        });
  };

  React.useEffect(() => {
    fetchAnuncios();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <main className={classes.main}>
        <Side
          mobileOpen={sidebar}
          handleDrawerToggle={() => setSidebar(false)}
          fetchAnuncios={fetchAnuncios}
        />
        <Content>
          <Search fetchAnuncios={fetchAnuncios} />
          <Button
            className={classes.ordenarBtn}
            onClick={() => setSidebar(!sidebar)}
          >
            Ordenar
          </Button>
          <Grid>
            {posts.map(item => (
              <Anuncio
                id={item._id}
                created_by={item.created_by}
                userId={userId}
                title={item.title}
                contract={item.contract}
                price={item.price}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                kitchens={item.kitchens}
                pictures={item.pictures}
                backyard={item.backyard}
              />
            ))}
          </Grid>
          {/* <TablePagination
            component="div"
            page={page}
            count="10"
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 25, 50]}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            onChangePage={handleChangePage}
            backIconButtonProps={{
              "aria-label": "previous page"
            }}
            nextIconButtonProps={{
              "aria-label": "next page"
            }}
          /> */}
        </Content>
      </main>
    </>
  );
};

export default Dashboard;
