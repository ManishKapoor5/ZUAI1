import Sidebar from '@/components/Sidebar'
import React from 'react'
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import Sixty from '../assets/Sixty.png'
import { MdFullscreen } from "react-icons/md";
import { MdFullscreenExit } from "react-icons/md";
import Card from '@/components/Card';
import Card1 from '@/components/Card1';
import { Button } from '@/components/ui/button';
import arrow_right from '../assets/arrow_right_alt.png'
const FirstPage = () => {
  return (
    <div>
      <Sidebar />
      <div className='bg-white absolute left-56 top-12 w-[47.5vw] h-[90vh] rounded-3xl'>
        <div className='bg-transparent bg-[#f7f6f6] w-[47.5vw] h-[10vh] rounded-t-3xl'>
            <div className='bg-white absolute left-5 top-2 rounded-3xl w-52 py-1 px-3'>IB ECONOMICS IA2.pdf</div>
            <div className='bg-white absolute left-96 top-2 flex rounded-3xl gap-3 w-52 px-3 text-xl py-2'><CiZoomIn /><img src={Sixty} alt=''/><CiZoomOut /><MdFullscreen /><MdFullscreenExit /></div>
            
        </div>
        <div className='border-2 rounded-lg border-slate-200 shadow-slate-300 shadow-md  w-[45vw] h-[75vh] mt-3 ml-4'>
            <div className='pt-8 pl-3'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quod nobis ad odio commodi nisi maxime ipsam, porro quas numquam blanditiis quia optio ducimus totam doloremque dolore perferendis, quis placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi magni nesciunt pariatur natus nemo aperiam accusamus voluptate tenetur ab cupiditate non velit harum repellat voluptatibus, sapiente voluptatem aspernatur tempore?</p><br></br>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores totam veritatis quis autem delectus tempora. Cum mollitia perspiciatis aspernatur, fugiat odio esse sunt minima facere! Consequatur vero sequi cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores totam veritatis quis autem delectus tempora. Cum mollitia perspiciatis aspernatur, fugiat odio esse sunt minima facere! Consequatur vero sequi cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe maiores totam veritatis quis autem delectus tempora. Cum mollitia perspiciatis aspernatur, fugiat odio esse sunt minima facere! Consequatur vero sequi cupiditate.</p>
            </div>
            
        </div>
      </div>
      <Card />
      <Card1 />
      <div className='bg-white absolute left-[67vw] top-[79vh] rounded-3xl w-60 py-1 px-1'>
      <Button className="text-3xl text-violet-900 font-extrabold" variant="outlined">Check detailed Evaluation&nbsp;&nbsp;<img src={arrow_right} alt=''/></Button>
      </div>
    </div>
  )
}

export default FirstPage
