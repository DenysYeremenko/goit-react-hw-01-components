import { StatHeader } from './Statistics.styled'
import { Box } from 'components/Box'
import { theme } from '../../theme'
import { StatisticsItem } from './StatisticsItem'
import PropTypes from "prop-types"

export const Statistics = ({stats, title}) => {
    return (
    <section className="statistics">
    <Box width="240px" 
    boxShadow={theme.shadows[0]} mt={1}>
    {title ? (<StatHeader>{title}</StatHeader>) : null}
    
        <ul className="statList">
            <Box display="flex" justifyContent="space-between" >
                <StatisticsItem stats={stats}/>
            </Box>
        </ul>
    </Box>
    </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired 
        })
    )
}