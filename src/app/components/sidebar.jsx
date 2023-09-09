import { Rowdies } from 'next/font/google'
import {icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9} from '../../../assets/svgs'
import styles from '../styles/sidebarStyles.module.css'
import Image from 'next/image'
export const Sidebar = () =>{
    const titles = ["Inbox", "Today", "Upcoming", "Important", "Meetings", "Trash"]
    const belowTitles= [
        "Fammily",
        "Vacation",
        "Festival",
        "Concerts"
    ]
    const icons = [
        icon0,
        icon1,
        icon2,
        icon3,
        icon4,
        icon5,]
        
    const belowIcons =[
        icon6,
        icon7,
        icon8,
        icon9]
    return (
        <div className={styles.container}>
            <div className={styles.upper}>
                {titles.map((ele, index)=>
                <div className={styles.upper_row}>
                    <Image src={icons[index]} width={20} height={20} alt=''></Image>
                    <p className={styles.upper_p}>{ele}</p>
                </div>)}
            </div>
            <div className={styles.lower}>
            {belowTitles.map((ele, index)=>
                <div className={styles.upper_row}>
                    <Image src={belowIcons[index]} width={20} height={20}></Image>
                    <p className={styles.lower_p}>{ele}</p>
                </div>)}
            </div>
        </div>
    )
}