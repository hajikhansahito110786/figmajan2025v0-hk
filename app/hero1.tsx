//import Image from "next/image";
import Image from 'next/image'
import chaircusion from "./chaircusion.png"
import logo1 from "./logo1.png"
//import Link from "next/link"
//import {fapple} from '@fortawesome/free-brands-svg-icons';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import {AppleIcon} from '@mui/icons-material/Apple';
function Hero1() {

 //export default  
  return (
    
 
<div className="sm:w-ful h-[400px] bg-yellow-300 flex justify-center mt-8" >
<div className=" bg-black sm:w-full md:w-full lg:w-[80%] h-full flex justify-between">
	  {/*left side below*/}
	 <div className='ml-8 sm:mt-4 md:mt-16 text-white'>
	 
	 <div className='flex justify center items-center'>
	 	<span> < Image src={logo1} alt ='hero-image' width={500} height={584} className="w-[145px]" /></span>
			<span> number model</span>
	
	</div>
	
	<div className='w-[200px]'>
	<h1 className="text-3xl"> up to 10% off Voucher</h1>
	<button className="font-bold underline underline-offset-8"> Shop Now</button>
	</div>
	
	
	

	 </div>

	 
	  {/*right side*/}
	 <div >
	 < Image src={chaircusion} alt ='hero-image' width={400} height={580} />
			
	 </div>

</div>
</div>

   
      
     
   
  );
}
export default Hero1;