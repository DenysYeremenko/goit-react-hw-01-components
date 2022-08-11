import { StatHeader, StatItem } from './Statistics.styled'
import { Box } from 'components/Box'
import { theme } from '../../theme'
import { getRandomHexColor } from '../../randomColorFunction/randomColorFunction'
import PropTypes from "prop-types"

export const Statistics = ({stats, title}) => {
    return (
    <Box as="section" width="240px" className="statistics" boxShadow={theme.shadows[0]} mt={1}>
    {title && <StatHeader>{title}</StatHeader>}
            <Box as="ul" className="statList" display="flex" justifyContent="space-between" >
                {stats.map(({id, label, percentage}) => 
                    <StatItem className="statItem" key={id} style={{background: getRandomHexColor()}}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </StatItem>
                )}
            </Box>
    </Box>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired 
        })
    ),
    title: PropTypes.string
}