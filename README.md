# Video Conferencing

This is a GoLang-based video conferencing server designed to facilitate real-time video streaming and chat functionalities. It utilizes WebRTC for video streaming and WebSocket for real-time communication.

## Features

- **Real-Time Video Streaming**: Utilizes WebRTC for low-latency, high-quality video streaming.
- **Chat Integration**: Includes chat functionalities for both rooms and streams.
- **Scalable Architecture**: Designed to handle multiple concurrent streams and rooms efficiently.
- **Customizable Views**: Utilizes GoFiber's templating engine for customizable HTML views.

## Installation

# Clone the repository
```
git clone https://github.com/MISHRA-TUSHAR/video-conferencing-golang.git
```
# Navigate to the project directory
```
cd video-conferencing-golang
```

# Install dependencies
```
go mod tidy
```

# To run the server
```
go run main.go
```



By default, the server runs on port 8000. You can specify a different port using the -addr flag. For example:

```
go run main.go -addr :9000
```


## Endpoints

- `/`: Welcome page.
- `/room/create`: Create a new room.
- `/room/{uuid}`: Enter a room by UUID.
- `/room/{uuid}/websocket`: WebSocket endpoint for room communication.
- `/room/{uuid}/chat`: Chat interface for a specific room.
- `/room/{uuid}/chat/websocket`: WebSocket endpoint for room chat.
- `/room/{uuid}/viewer/websocket`: WebSocket endpoint for viewers in a room.
- `/stream/{suuid}`: View a specific stream by Stream UUID.
- `/stream/{suuid}/websocket`: WebSocket endpoint for stream communication.
- `/stream/{suuid}/chat/websocket`: WebSocket endpoint for stream chat.
- `/stream/{suuid}/viewer/websocket`: WebSocket endpoint for viewers in a stream.
