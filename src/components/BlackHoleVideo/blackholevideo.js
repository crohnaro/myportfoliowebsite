import BackGroundVideo from 'next-video/background-video'

import blackholevideo from '../../../videos/blackholevideo2.webm'

export default function BlackholeVideo() {
    return (
        <BackGroundVideo src={blackholevideo}>
            <h1>Testando</h1>
            <p>Lorem Impsum</p>
        </BackGroundVideo>
    )
}