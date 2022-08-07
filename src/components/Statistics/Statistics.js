import { StatHeader } from './Statistics.styled'
import { Box } from 'components/Box'
import { theme } from '../../theme'
import { StatisticsItem } from './StatisticsItem'

export const Statistics = ({stats}) => {
    return (
    <section className="statistics">
    <Box width="240px" 
    boxShadow={theme.shadows[0]} mt={1}>
    <StatHeader>Upload stats</StatHeader>
        <ul className="statList">
            <Box display="flex" justifyContent="space-between" >
                <StatisticsItem stats={stats}/>
            </Box>
        </ul>
    </Box>
    </section>
    )
}