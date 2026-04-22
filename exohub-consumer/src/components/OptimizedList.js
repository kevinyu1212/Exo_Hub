"use client";
import { FixedSizeList as List } from 'react-window';

// 데이터가 수천 개여도 현재 보이는 부분만 렌더링하여 렉 방지
export const OptimizedList = ({ items, rowComponent }) => (
  <List
    height={500}
    itemCount={items.length}
    itemSize={50}
    width={'100%'}
  >
    {({ index, style }) => (
      <div style={style}>
        {rowComponent(items[index])}
      </div>
    )}
  </List>
);
