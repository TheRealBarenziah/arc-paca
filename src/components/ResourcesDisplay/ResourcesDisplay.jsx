import React from 'react';
import '../../utils/resourcesList/resourcesList'
import ResourceCard from './ResourceCard';
import '../../utils/resourcesList/resourcesList'
import { resourcesList } from '../../utils/resourcesList/resourcesList';

export default function ResourcesDisplay() {
  return (
    <div>
      <p>Hello.</p>
      {resourcesList.map((resourceObject) => <ResourceCard {...resourceObject} />
      )}
    </div>
  )
}
