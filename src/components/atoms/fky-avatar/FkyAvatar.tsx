import './FkyAvatar.css'

const CURRENT_USER_SRC = 'https://media.licdn.com/dms/image/D4D03AQGL_aSdA-H8cw/profile-displayphoto-shrink_400_400/0/1664792465170?e=1680134400&v=beta&t=Z90drI8d-RYGk68Gzv3Bn2BhYUHINskNbCzWaqvFSi0'
type FkyAvatarType = { src?: string, size?: number }
export const FkyAvatar = ({src, size = 32}: FkyAvatarType) => {
  return (
      <div className={'fky-avatar'}>
        <img src={src || CURRENT_USER_SRC} alt="User" style={{width: size, height: size}}/>
      </div>
  )
}
