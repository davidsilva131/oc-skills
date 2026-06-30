# Forms & Inputs

## General Guidance

> **⚠️ Many projects don't have `FieldGroup`, `Field`, `InputGroup`, `FieldSet`, `ToggleGroup`, `Combobox`, or `InputOTP` components.**
> Use the patterns described below instead.

Some `Input` components have built-in `label`, `error`, and `helperText` props. For most form fields, this is sufficient:

```tsx
<Input
  id="email"
  type="email"
  label="Email"
  error={errors.email?.message}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

For standalone labels (when not using the Input's built-in label), use `<Label>`:

```tsx
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

**Choosing form controls:**

- Text input → `Input`
- Dropdown → `Select` (+ `SelectTrigger`, `SelectContent`, `SelectItem`, `SelectGroup`)
- Boolean → `Switch` or `Checkbox`
- Single choice (few options) → `RadioGroup` or manual `<Button>` loop
- Multi-line text → native `<textarea>` with appropriate styles
- Button-in-input → `<div className="relative">` with absolute positioned Button

---

## Input with button inside (no InputGroup/InputGroupAddon)

Use relative positioning:

```tsx
<div className="relative">
  <Input
    placeholder="Buscar..."
    className="pr-10"
  />
  <Button
    size="icon"
    className="absolute right-1 top-1 h-9 w-9"
  >
    <SearchIcon className="h-4 w-4" />
  </Button>
</div>
```

---

## Option sets (2–7 choices) — no ToggleGroup

Use `<Button>` with manual state or `<RadioGroup>`:

```tsx
const [selected, setSelected] = useState("daily")

<div className="flex gap-2">
  {["daily", "weekly", "monthly"].map((option) => (
    <Button
      key={option}
      variant={selected === option ? "default" : "outline"}
      onClick={() => setSelected(option)}
    >
      {option}
    </Button>
  ))}
</div>
```

---

## Validation with the custom Input

The project's `Input` component handles validation display internally via its `error` prop:

```tsx
<Input
  label="Email"
  error={errors.email?.message}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

For controlled selects, wrap with `<Label>`:

```tsx
<div className="space-y-2">
  <Label htmlFor="role">Rol</Label>
  <Select value={role} onValueChange={setRole}>
    <SelectTrigger id="role">
      <SelectValue placeholder="Seleccionar rol" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="operator">Operador</SelectItem>
    </SelectContent>
  </Select>
</div>
```
