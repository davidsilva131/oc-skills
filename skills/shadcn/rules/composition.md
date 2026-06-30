# Component Composition

## Project-Specific Notes

> **⚠️ Verify which components exist in YOUR project. Common gaps:**
> - `Alert`, `Empty`, `Spinner` — often not available. Build custom states.
> - `AlertDialog` — often not available. Use `Dialog` with destructive styling.
> - `HoverCard`, `Menubar`, `ContextMenu`, `Sheet` — often not available.
> - `Tabs` — may not be available. Use manual tab state.
> - `Drawer` (vaul) and `Dialog` — usually available as standard.

## Contents

- Items always inside their Group component
- Callouts use custom markup (no Alert component)
- Empty states use custom markup
- Toast notifications use sonner
- Choosing between overlay components
- Dialog and Drawer always need a Title
- Card structure
- Button loading state (no Spinner component)
- Avatar fallback
- Use Separator instead of raw hr or border divs
- Use Skeleton for loading placeholders
- Use Badge instead of custom styled spans

---

## Items always inside their Group component

Never render items directly inside the content container.

**Incorrect:**

```tsx
<SelectContent>
  <SelectItem value="apple">Apple</SelectItem>
  <SelectItem value="banana">Banana</SelectItem>
</SelectContent>
```

**Correct:**

```tsx
<SelectContent>
  <SelectGroup>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
  </SelectGroup>
</SelectContent>
```

This applies to all group-based components:

| Item                                                       | Group               |
| ---------------------------------------------------------- | ------------------- |
| `SelectItem`, `SelectLabel`                                | `SelectGroup`       |
| `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuSub` | `DropdownMenuGroup` |
| `CommandItem`                                              | `CommandGroup`      |

---

## Callouts (no Alert component)

Use a styled div:

```tsx
<div className="rounded-md bg-muted p-4 text-sm">
  <p className="font-medium">Warning</p>
  <p className="text-muted-foreground">Something needs attention.</p>
</div>
```

For errors:

```tsx
<div className="rounded-md bg-red-500/10 p-3 text-sm text-red-400">
  Error message here.
</div>
```

---

## Empty states (no Empty component)

Build custom empty states:

```tsx
<div className="flex flex-col items-center gap-4 py-12 text-center">
  <FolderIcon className="h-12 w-12 text-muted-foreground" />
  <div>
    <p className="font-semibold">No projects yet</p>
    <p className="text-sm text-muted-foreground">Get started by creating a new project.</p>
  </div>
  <Button>Create Project</Button>
</div>
```

---

## Toast notifications use sonner

```tsx
import { toast } from 'sonner';

toast.success('Changes saved.');
toast.error('Something went wrong.');
toast('File deleted.', {
  action: { label: 'Undo', onClick: () => undoDelete() },
});
```

Use the `<Toaster />` component (available in `@/components/ui/toaster`) at the root layout.

---

## Choosing between overlay components

| Use case                           | Component                                                     |
| ---------------------------------- | ------------------------------------------------------------- |
| Focused task that requires input   | `Dialog`                                                      |
| Destructive action confirmation    | `Dialog` with custom styling                                  |
| Side panel with details or filters | `Dialog className="sm:max-w-lg"` or `Drawer` (vaul)           |
| Mobile-first bottom panel          | `Drawer` (vaul)                                               |
| Contextual menu                    | `DropdownMenu`                                                |
| Quick info on click                | `Popover`                                                     |
| Command palette                    | `Command` inside `Dialog`                                     |

---

## Dialog and Drawer always need a Title

`DialogTitle` and `DrawerTitle` are required for accessibility. Use `className="sr-only"` if visually hidden.

```tsx
<DialogContent>
  <DialogHeader>
    <DialogTitle>Edit Profile</DialogTitle>
    <DialogDescription>Update your profile.</DialogDescription>
  </DialogHeader>
  ...
</DialogContent>
```

---

## Card structure

Use full composition — don't dump everything into `CardContent`:

```tsx
<Card>
  <CardHeader>
    <CardTitle>Team Members</CardTitle>
    <CardDescription>Manage your team.</CardDescription>
  </CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>
    <Button>Invite</Button>
  </CardFooter>
</Card>
```

Note: This project's Card also has `CardAction` (for header actions).

---

## Button loading state (no Spinner component)

Use a `lucide-react` loading icon:

```tsx
import { Loader2 } from 'lucide-react';

<Button disabled>
  <Loader2 className="h-4 w-4 animate-spin" />
  Saving...
</Button>
```

---

## Avatar fallback

Since there's no Avatar component, use a styled fallback:

```tsx
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-medium">
  JD
</div>
```

---

## Use existing components instead of custom markup

| Instead of                                         | Use                                  |
| -------------------------------------------------- | ------------------------------------ |
| `<hr>` or `<div className="border-t">`             | `<Separator />`                      |
| `<div className="animate-pulse">` with styled divs | `<Skeleton className="h-4 w-3/4" />` |
| `<span className="rounded-full bg-green-100 ...">` | `<Badge variant="secondary">`        |
