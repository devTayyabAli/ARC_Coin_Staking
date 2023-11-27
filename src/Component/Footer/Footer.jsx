import React from 'react'
import {MdEmail} from  "react-icons/md"
import {BsFacebook, BsTelegram, BsYoutube} from "react-icons/bs"
import {SiDiscord, SiTiktok} from "react-icons/si"
import {FaTwitter} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {GrReddit} from "react-icons/gr"
import "./Footer.css"

export default function Footer() {
  return (
    <div className='main_footer_here py-5'>
    <div className="container">
        <div className="row justify-content-between">
            <div className="col-md-5">
                <div className='text-start'>
                    <h2 className='text-white'>GET IN TOUCH</h2>
                    <div className='d-flex align-items-center text-start'>
                        <span className='me-2 icon_footer footer_clr'><MdEmail></MdEmail></span>
                        <span className='footer_text footer_clr' >         <a href="mailto:info@archieneko.com" target="_blank" className='text-decoration-none footer_clr'>
  info@archieneko.com </a></span>
                     </div> 
                    <div className='d-flex align-items-center text-start'>
                        <span className='me-2 icon_footer footer_clr'><MdEmail></MdEmail></span>
                        <span className='footer_text footer_clr' ><a href="mailto:sales@archieneko.com" target="_blank" className='text-decoration-none footer_clr'> sales@archieneko.com </a></span>
                     </div> 
                    <div className='d-flex align-items-center text-start'>
                        <span className='me-2 icon_footer footer_clr'><MdEmail></MdEmail></span>
                        <span className='footer_text footer_clr' > <a href="mailto:marketing@archieneko.com" target="_blank" className='text-decoration-none footer_clr'>marketing@archieneko.com</a></span>
                     </div> 
                    <div className='d-flex align-items-center text-start'>
                        <span className='me-2 icon_footer footer_clr'><MdEmail></MdEmail></span>
                        <span className='footer_text footer_clr' > <a href="mailto:support@archieneko.com" target="_blank" className='text-decoration-none footer_clr'>support@archieneko.com</a></span>
                     </div> 
                </div>
            </div>
            <div className="col-md-5">
                <h2 className='text-white'>
SOCIAL MEDIA</h2>
<div className="row mt-3">
    <div className="col-3">
    <a href="https://discord.com/invite/bKxNt6Ku3j" target="_blank">
        <SiDiscord className='soical_footer_icons'></SiDiscord>
        </a>
    </div>
    <div className="col-3">
    <a href="https://twitter.com/ArchieNeko_" target="_blank">
        <FaTwitter className='soical_footer_icons'></FaTwitter>
        </a>

    </div>
    <div className="col-3">
    <a href="https://www.instagram.com/archieneko/" target="_blank">

        <AiFillInstagram className='soical_footer_icons'></AiFillInstagram>
        </a>
    </div>
    <div className="col-3">
    <a href="https://t.me/+25V5is_WBGc4N2Zh" target="_blank">

        <BsTelegram className='soical_footer_icons'></BsTelegram>
        </a>
    </div>
</div>
<div className="row mt-3">
    <div className="col-3">
    <a href="https://www.youtube.com/@archieneko7932" target="_blank">

        <BsYoutube className='soical_footer_icons'></BsYoutube>
        </a>
    </div>
    <div className="col-3">
    <a href="https://www.tiktok.com/@archieneko1?_t=8YTnLim81PS&_r=1" target="_blank">

        <SiTiktok className='soical_footer_icons'></SiTiktok>
        </a>
    </div>
    <div className="col-3">
    <a href="https://m.facebook.com/archiealliance" target="_blank">

        <BsFacebook className='soical_footer_icons'></BsFacebook>
        </a>
    </div>
    <div className="col-3">
    <a href="https://www.reddit.com/user/ArchieNeko_?utm_medium=android_app&utm_source=share" target="_blank">

        <GrReddit className='soical_footer_icons'></GrReddit>
        </a>
    </div>
</div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

{/* <a href=""><span class="text-primary">sales@archieneko.com</span></a> */}
{/* <a href=""><span class="text-primary">marketing@archieneko.com</span></a> */}
{/* <a href=""><span class="text-primary">support@archieneko.com</span></a> */}
{/* <a href=""><span class="text-primary">info@archieneko.com</span></a> */}


