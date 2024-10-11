import{Html,Head,Font,Preview,Heading,Row,Section,Text,Button} from '@react-email/components'
import { Interface } from 'readline'

interface VerificationEmailProps{
    username:string;
    otp:string
}


export default function VerificationEmail({username,otp}

: VerificationEmailProps){
    return(
       
       <Html>
        <Head>
            <title>Verification Code</title>
        </Head>
        <Preview>Here&apos;s your verification code :{otp}</Preview>
        <Section>
            <Row>
                <Heading as="h2">Hello{username}</Heading>
            </Row>
            <Row>
                <Text>Thank you for Registering.Please use the following varification code to confirm your registration: </Text>
            </Row>
            <Row>
                <Text>{otp}</Text>
            </Row>
            <Row>
                <Text>If you did not request this code , please ignore this email</Text>
            </Row>
        </Section>

       </Html>
    )
}