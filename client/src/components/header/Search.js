import React,{ useState, useEffect } from 'react';
import { InputBase,styled,List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/product_action';



const Search = () => {

    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


  return (
    <SearchBox style={{display: 'flex'}}>
      <InputSearch placeholder='Search for products, brands and more'
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e) => getText(e.target.value)} 
      /> 
      <SearchIconCSS/>
          {
              text && 
              <ListWrapper hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
      
                        {product.title.longTitle}
                      
                    </ListItem>
                  ))
                }  
              </ListWrapper>
            }
    </SearchBox>
  )
};

const SearchBox = styled('div')`
    background-color: #ffffff;
    margin-left: 15px;
    border-radius: 2px;
    width: 35%;
    
`;

const InputSearch = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconCSS = styled(SearchIcon)`
    color: blue;
    margin-top: 3px;
    margin-right: 10px;
    display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

export default Search;
