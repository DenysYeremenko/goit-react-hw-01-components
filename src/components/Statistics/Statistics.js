import style from './Statistics.module.css'

const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const Statistics = ({title, stats}) => {

    return (
    <section className={style.statistics}>
    <h2 className={style.title} >Upload stats</h2>
    <ul className={style.statList}>
        <li className={style.statItem} style={{background: getRandomHexColor()}}>
        <span className="label">{stats[0].label}</span>
        <span className="percentage">{stats[0].percentage}%</span>
        </li>
        <li className={style.statItem} style={{background: getRandomHexColor()}}>
        <span className="label">{stats[1].label}</span>
        <span className="percentage">{stats[1].percentage}%</span>
        </li>
        <li className={style.statItem} style={{background: getRandomHexColor()}}>
        <span className="label">{stats[2].label}</span>
        <span className="percentage">{stats[2].percentage}%</span>
        </li>
        <li className={style.statItem} style={{background: getRandomHexColor()}}>
        <span className="label">{stats[3].label}</span>
        <span className="percentage">{stats[3].percentage}%</span>
        </li>
    </ul>
    </section>
    )
}