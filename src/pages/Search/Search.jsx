import React from 'react'
import './Search.css'
import Logo from '../../img/logo.png'
import { UilSearch } from '@iconscout/react-unicons'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import Posts from '../../components/Posts/Posts'
import Icons from '../../components/Icons/Icons'
import ImageModal from '../../components/ImageModal/ImageModal'

const Search = ({imageNum, setImageNum, imgModal, setImgModal}) => {
    return (
    <>
        {imgModal && <><ImageModal imgModal={imgModal} setImgModal={setImgModal} imageNum={imageNum} /></>}
        <div className="Search_page">
            <div className="logss">
              <LogoSearch />
            </div>
            

            <div className="Pos">
             <div className="logg">
                <LogoSearch />
             </div>
                <div className="Search">
                <input style={{ fontSize:"1.2rem"}} type="text" placeholder="Search" />
                <div className="s-icon">
                    <UilSearch />
                </div>
                </div>
               <Posts imgModal={imgModal} setImageNum={setImageNum} setImgModal={setImgModal} />
            </div>
                
            <div className="Icoms">
                <Icons/>
            </div>
            
        </div>
    </>
  )
}

export default Search