import React from 'react';
import {Box, styled, Button, Divider,Typography} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';



const RightComponent = ({products, categories }) => {
    
  return (

        
        <Component>
            <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: 10, marginLeft: 40}}>
                <h5 style={{marginLeft: 40 }}>Sort by</h5>
                <p style={{color: '#2874f0', fontWeight: 700 , marginLeft: 40}}><u>Popularity</u></p>
                <p style={{color:'gray' , marginLeft: 40}}>Price Low to high</p>
                <p style={{color: 'gray', marginLeft: 40}}>Price High to low</p>
                <p style={{color: 'gray', marginLeft: 40}}>Rating</p>
            </div>
            <Deal>
                <DealText>{categories}</DealText>
                <ViewAllButton variant="contained" color="primary">View All</ViewAllButton>
            </Deal>
        <Divider />
            <div className='row'>
            {
                products.map(product => (
                <div className="col-lg-3 col-md-6" textAlign="center" style={{ padding: '25px 50px' }}>
                    <Image src={product.url} alt="Product"/>
                    <Text>{product.brand}</Text>
                    <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                    <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>
                    <StyleDiv>
                        <Typography style={{marginTop: 2, backgroundColor: 'green'}}> {product.review.rating} <StarIcon style={{fontSize: 'medium', marginBottom: 3}}/></Typography>
                        <Typography variant='h6'> ({product.review.noOfPeople})</Typography>
                    </StyleDiv>
                    <StyleTypography> {product.price.cost} 
                        <s>{product.price.mrp}</s>
                        <span> {product.price.discount}</span>
                    
                    </StyleTypography>
                </div>
            ))
            }
            </div>
        
    
        </Component>
    
  )
}

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
    width: 70%;
`;

const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
`

const DealText = styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`



const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    margin-right: 10%;
`;

const Image = styled('img')({
    width: 140,
    height: 140
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`;

const StyleDiv = styled('div')`
    display: flex;
    p{
        color: #fff;
        padding: 2px 3px;
        font-size: 12px;
        border-radius: 2px;
        
    }
    h6{
        font-size: 14px;
        color: gray;
        margin-left: 5px;
        margin-top: 2px;
    }
`;
const StyleTypography = styled(Typography)`
    font-weight: 700;
    margin-top: 3px;

    s{
        margin-left: 10px;
        font-weight: 400;
        color: gray;
    }
    span{
        color: green;
        font-size: 15px;
    }

`;

export default RightComponent;
