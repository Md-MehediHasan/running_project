import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params }) {
  
 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2a1zMclArbExPUvBHlfSA2&ust=1720332921065000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiOntnhkYcDFQAAAAAdAAAAABAE' />
      </div>
    ),
    {
      ...size,
    }
  )
}