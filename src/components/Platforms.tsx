import React from 'react'
import apple from "@/app/assets/images/platforms/apple-podcasts.png";
import amazon from "@/app/assets/images/platforms/amazon-music.png";
import spotify from "@/app/assets/images/platforms/spotify.png";
import cloudsound from "@/app/assets/images/platforms/cloudsound.png";
import pocketcasts from "@/app/assets/images/platforms/pocket-casts.png";
import Image from 'next/image';
const Platforms = () => {
  return (
    <div className='flex justify-center gap-3 items-center my-4'>
        <a href="https://podcasts.apple.com/in/podcast/wild-south-raiders-podcast/id1833613189"><Image src={apple} alt="Apple Podcasts" width={35} height={35}  className='shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-200'/></a>
        <a href="https://music.amazon.co.uk/podcasts/44983700-5ce0-4f6e-94ba-4abe9abe7765/wild-south-raiders-podcast"><Image src={amazon} alt="Amazon Music" width={35} height={35}  className='shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-200'/></a>
        <a href="https://open.spotify.com/show/3Vyzr177KDIGxUPjEHzfMD"><Image src={spotify} alt="Spotify" width={35} height={35}  className='shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-200'/></a>
        <a href="https://castbox.fm/channel/Wild-South-Raiders-Podcast-id6713477?country=gb"><Image src={cloudsound} alt="Google Podcasts" width={35} height={35}  className='shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-200'/></a>
        <a href="https://pocketcasts.com/podcast/wild-south-raiders-podcast/045459f0-5a2d-013e-fb5b-0affd256cbb1"><Image src={pocketcasts} alt="Pocket Casts" width={35} height={35}  className='shadow-[0_2px_8px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-200'/></a>
    </div>
  )
}

export default Platforms