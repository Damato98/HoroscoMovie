import Header from '../components/Header'
import { PathNameContext } from '../contexts'

function StaticLayoutContainer() {
    return (
        <div>
            <PathNameContext.Consumer>
                { pathname => (<Header pathname={pathname} />)}
            </PathNameContext.Consumer>
        </div>
    )
}

export default StaticLayoutContainer