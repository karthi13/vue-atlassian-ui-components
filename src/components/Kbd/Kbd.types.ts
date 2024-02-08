export type KbdKey =
  | 'command'
  | 'cmd'
  | 'shift'
  | 'ctrl'
  | 'option'
  | 'enter'
  | 'delete'
  | 'escape'
  | 'tab'
  | 'capslock'
  | 'up'
  | 'right'
  | 'down'
  | 'left'
  | 'pageup'
  | 'pagedown'
  | 'home'
  | 'end'
  | 'help'
  | 'space'
  | 'windows'
  | 'alt'
;

export const kbdKeysMap: Record<KbdKey, string> = {
    command: '⌘',
    cmd: '⌘',
    shift: '⇧',
    ctrl: '⌃',
    option: '⌥',
    enter: '↵',
    delete: '⌫',
    escape: '⎋',
    tab: '⇥',
    capslock: '⇪',
    up: '↑',
    right: '→',
    down: '↓',
    left: '←',
    pageup: '⇞',
    pagedown: '⇟',
    home: '↖',
    end: '↘',
    help: '?',
    space: '␣',
    windows: '⊞',
    alt: '⎇',
  };