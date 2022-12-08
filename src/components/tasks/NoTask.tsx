import {Button, Card, Heading} from "../Common";

interface NoTaskStats {
    handleOpenModal: (open: boolean) => void
}

export default function NoTask({handleOpenModal}: NoTaskStats) {
    return (
        <Card smBorder shadow={'sm'} className={'flex flex-column items-center w-304 p-37'}>
            <Heading className={'text-center'}>You have no task.</Heading>

            <Button className={'mt-20 mb-9'} onClick={() => handleOpenModal(true)}>
                + New Task
            </Button>
        </Card>
    )
}