import React from 'react'

export default () => (
  <style jsx global>
    {`
      html,
      body,
      #__next,
      .main,
      .page,
      .editor,
      .editor > div,
      .dnd-container {
        height: 100%;
      }
      .dnd-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }
      .dnd-container > div {
        margin-top: 50px;
      }
    `}
  </style>
)
