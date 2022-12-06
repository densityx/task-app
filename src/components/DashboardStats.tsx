import {Card, Grid, Heading, Pie} from "./Common";

export default function DashboardStats({stats}) {
    return (
        <Grid>
            <Card
                smBorder
                shadow={'sm'}
                className={'px-32 sm:px-24 py-24'}
            >
                <Heading>
                    Tasks Completed
                </Heading>

                <div className={'mt-4 relative'}>
                    <span className={'stats-done'}>
                        {stats?.tasksCompleted}
                    </span>
                    <span className={'stats-total'}>
                        / {stats?.totalTasks}
                    </span>
                </div>
            </Card>

            <Card
                smBorder
                shadow={'sm'}
                className={'px-32 sm:px-24 py-24'}
            >
                <Heading>Latest Created Tasks</Heading>

                <ul className={'mt-12 stats-list'}>
                    {stats?.latestTasks.map((task, index) => (
                        <li className={'stats-item'} key={index}>
                            {task.checked ? (<s>{task.name}</s>) : task.name}
                        </li>
                    ))}
                </ul>
            </Card>

            <Card
                smBorder
                shadow={'sm'}
                className={'px-32 sm:px-24 py-24 flex items-center justify-center'}
            >
                <Pie done={(stats?.tasksCompleted / stats?.totalTasks) * 100}/>
            </Card>
        </Grid>
    )
}