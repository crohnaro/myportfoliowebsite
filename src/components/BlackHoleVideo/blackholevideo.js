import BackGroundVideo from 'next-video/background-video'

import blackholevideo from '../../../videos/blackholevideo.webm'

export default function BlackholeVideo() {
    return (
        <BackGroundVideo src={blackholevideo}>
            <h1>Testando</h1>
            <p>Lorem Impsum</p>
        </BackGroundVideo>
    )
}