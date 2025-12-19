type CameraType = "PTZ" | "Arm"
export type Mode = "Autonomous" | "LightWeight"
type Connection = "Reachable" | "Unreachable"

export type Camera = {
  id: string
  name: string
  type: CameraType
  mode: Mode
  connection: Connection
}
