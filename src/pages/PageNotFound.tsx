import {useEffect} from "react";
import {Card, Heading, Main} from "../components/Common";

export default function PageNotFound() {
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <Main>
            <Card className={'w-304 p-37'}>
                <Heading>
                    404: Page Not Found
                </Heading>
            </Card>
        </Main>
    )
}