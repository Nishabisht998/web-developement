import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className='bg-light mt-4'>
  <div className="footer1 mt-3 d-flex">
  <div>
    <h6 className='fw-bold my-3'>online shopping</h6>
  <ol >
    <li>mens</li>
    <li>women </li>
    <li>kids </li>
    <li>beauty</li>
    <li>living & home</li>
    <li>gift cards</li>
    <li>myntra insider</li>
     </ol>

 
 
  <h6 className='fw-bold my-3'>useful link</h6>
  <ol >
    <li>careers </li>
    <li>blog</li>
    <li>site map </li>
    <li>white hat</li>
    <li>coporate information</li>
     </ol>
  </div>

 
  <div className='mx-4'>
    <h6 className='fw-bold my-3'>customer policies</h6>
  <ol >
    <li>contact us  </li>
    <li>FAQ </li>
    <li>T&C </li>
    <li>Terms of use </li>
    <li>tracks orders</li>
    <li>shipping</li>
    <li>cancellation</li>
    <li>return policy</li>
    <li>copyright &copy;</li>
     </ol>

    </div>
     <div className="mx-5">
      <h6 className='fw-bold my-3'>experience myntra app on mobile</h6>
      <div className="image ">
        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/>
        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/>     
     </div>
     <h6 className='fw-bold my-3'>keep in touch</h6>
     <i class="fa-brands fa-facebook"/>
     <i class="fa-brands fa-twitter"/>
     <i class="fa-brands fa-youtube"></i>
     <i class="fa-brands fa-instagram"></i>
     </div>
     <div className='my-4'>
     <div className="m-4 d-flex ">
     <img  className="original" src='https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png'></img>
       <p className='mt-2 p-2'><strong>100% ORIGINAL</strong> guarantee for all products at myntra.com</p>
     </div>
     <div  className="m-4 d-flex">
      <img className='original' src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png" alt="" />
      <p className='mt-2 p-2 '><strong>Return within 14days </strong>of receiving your order</p>
     </div>
     </div>
  </div>

</footer>

    </div>
  )
}

export default Footer