import React from 'react'

export default function ResourceCard({title, description, labels, url}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={url} alt={title}>My Link</a>
    </div>
  )
}
