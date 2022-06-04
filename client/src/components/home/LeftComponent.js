import React from 'react';
import {Box,TextField, styled, Typography, Accordion, AccordionSummary, AccordionDetails, Checkbox} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';



const URL = 'https://www.adgully.com/img/800/68264_fl.png.jpg'

const LeftComponent = ({products}) => {
   
   

  return (
      <>    
        <StyleDiv style={{width: '20%'}}>
            <h4>Filters</h4>
            <hr/>

            <Typography style={{color : 'gray', textTransform: 'uppercase', fontSize: 14}}>categories</Typography>
            <Box>
                <StyleAccordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography >Electronics</Typography>
                    </AccordionSummary>
                    <StyleAccordeonDetail>
                    <Typography >Smart Watches</Typography>
                    <Typography>Headphones</Typography>
                    <Typography>Trimmers, Dryers & more</Typography>
                    </StyleAccordeonDetail>
                </StyleAccordion> 
                    
                <StyleAccordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Hardware</Typography>
                    </AccordionSummary>
                    <StyleAccordeonDetail>
                        <Typography>Home & Kitchen</Typography>
                        <Typography>Table Fans</Typography>
                        <Typography>Trimmers</Typography>
                    </StyleAccordeonDetail>
                </StyleAccordion>
            </Box>
            <StyleDivider/>
            <div style={{display : 'flex'}}>
                <Checkbox  /> <Image src={URL} alt="fassured"/>
            </div> 
            <StyleDivider/>

            <Box>
                <StyleAccordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Brands</Typography>
                   
                    </AccordionSummary>
                    <StyleAccordeonBrands>
                    
            
                    <TextField variant='standard' label= 'Search' style={{marginBottom: 5}}  />
                   
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> Titan</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> Logitech</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> MI</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> Bajaj</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> ASUS </Typography>
                    </div>
                    </StyleAccordeonBrands>
                </StyleAccordion> 

            </Box>

            <Box>
                <StyleAccordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>CUSTOMER RATINGS</Typography>
                   
                    </AccordionSummary>
                    <StyleAccordeonBrands>
                   
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 4 <StarIcon style={{fontSize: 'medium', marginBottom: 1}}/> & above</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 3 <StarIcon style={{fontSize: 'medium', marginBottom: 1}}/> & above</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 2 <StarIcon style={{fontSize: 'medium', marginBottom: 1}}/> & above</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 1 <StarIcon style={{fontSize: 'medium', marginBottom: 1}}/> & above</Typography>
                    </div>
                    </StyleAccordeonBrands>
                </StyleAccordion> 

            </Box>

            <Box>
                <StyleAccordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Discounts</Typography>
                   
                    </AccordionSummary>
                    <StyleAccordeonBrands>
                   
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 70% & above</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 50 % & above </Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 20 % & above</Typography>
                    </div>
                    <div style={{display : 'flex'}}>
                        <StyleCheckbox /><Typography style={{marginTop: 2, marginLeft: 2}}> 0 %  & above</Typography>
                    </div>
                    </StyleAccordeonBrands>
                </StyleAccordion> 

            </Box>
            
        </StyleDiv>
        
    </>

  )
}

const StyleDiv = styled('div')`
    padding: 40px;
    background-color: #ffffff;
    margin: 10px 10px 10px 100px;

`;

const StyleAccordion = styled(Accordion)`
    border-radius: 0;
    box-shadow: inherit;
    border: none;
    p{
        font-size: 14px;
    }
`;
const StyleAccordeonDetail = styled(AccordionDetails)`
    padding: 0;
    margin-left: 40px;
    p{
        font-size: 13px;
    }
`;

const Image = styled('img')`
    margin-top: 12px;
    width: 80px;
    height: 20px;
`; 

const StyleDivider = styled('hr')`
    
    padding : 0;
    margin: 3px;
`;

const StyleCheckbox = styled(Checkbox)`
    padding: 0;
    margin: 0;
    size: 14;
    
`;

const StyleAccordeonBrands = styled(AccordionDetails)`
    padding: 0;
    margin-left: 23px;
    p{
        font-size: 13px;
    }
`;



export default LeftComponent;
