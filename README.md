# React Tag Component

A highly customizable and accessible React tag component that supports multiple styles, animations, and interactions.

## Features

- 🎨 Multiple color schemes and gradient options
- 🔄 Interactive effects (scale, shine, pointer)
- ✨ Custom styling support
- 🎯 Accessibility features
- 📱 Responsive sizing
- ❌ Closeable tags with fade-out animation
- 🖼️ Icon support
- 🛠️ Highly customizable (border, shadow, opacity, etc.)

## Installation

```bash
npm install @xue160709/react-tag
# or
yarn add @xue160709/react-tag
```

## Basic Usage

```tsx
import { Tag } from '@xue160709/react-tag';

function App() {
  return (
    <div>
      <Tag text="Basic Tag" />
      <Tag text="Closeable" onClose={() => console.log('Tag closed')} />
      <Tag text="Custom Color" color="custom" customColor="#ff0000" />
    </div>
  );
}
```

## Examples

### Color Variants

```tsx
<>
  <Tag text="Blue Tag" color="blue" />
  <Tag text="Green Tag" color="green" />
  <Tag text="Red Tag" color="red" />
  <Tag text="Custom" color="custom" customColor={{ text: '#ff0000', background: '#fff' }} />
</>
```

### Gradient Tags

```tsx
<Tag 
  text="Gradient" 
  gradient={{
    from: '#4F46E5',
    to: '#E114E5',
    direction: '45deg'
  }}
/>
```

### Interactive Tags

```tsx
<>
  <Tag text="Click me" onClick={() => alert('Clicked!')} interactive="pointer" />
  <Tag text="Hover Scale" interactive="scale" />
  <Tag text="Multiple Effects" interactive={['scale', 'shine']} />
</>
```

### With Icons

```tsx
<Tag 
  text="With Icon"
  icon={<StarIcon />}
  color="blue"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | - | The text content of the tag |
| color | ColorOption | 'blue' | Predefined color scheme |
| customColor | string \| { text?: string; background?: string; } | - | Custom color configuration |
| onClose | () => void | - | Callback when tag is closed |
| size | 'small' \| 'medium' \| 'large' | 'medium' | Size of the tag |
| icon | ReactNode | - | Icon element to display |
| onClick | () => void | - | Click handler |
| interactive | ('none' \| 'pointer' \| 'scale' \| 'shine')[] \| string | 'none' | Interactive effects |
| fadeOut | boolean | false | Enable fade out animation on close |
| gradient | { from: string; to: string; direction?: string; } | - | Gradient configuration |
| shadow | boolean | false | Enable drop shadow |
| opacity | number | 100 | Tag opacity (0-100) |

## Accessibility

The component includes built-in accessibility features:
- Proper ARIA roles and labels
- Keyboard navigation support
- Focus management
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © [2024] [xuezhirong]

See [LICENSE](./LICENSE) file for more details.
