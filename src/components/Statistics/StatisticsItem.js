import { StatItem } from './Statistics.styled'
import { getRandomHexColor } from '../../randomColorFunction/randomColorFunction'

export const StatisticsItem = ({stats}) => {
    return stats.map((stat) => 
        <StatItem className="statItem" key={stat.id} style={{background: getRandomHexColor()}}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
        </StatItem>
    )
}