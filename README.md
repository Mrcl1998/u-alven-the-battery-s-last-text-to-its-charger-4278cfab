# The Battery's Last Text to Its Charger

[![make.fun](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/Mrcl1998/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/rank.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/Mrcl1998/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/reward.svg)](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

Entry for the make.fun bounty
[The Battery's Last Text to Its Charger](https://make.fun/c/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
— the phone battery's last text message to the charger it waited for all day,
one line of at most 200 characters.

## The entry (125 characters, one line)

> i waited all day and you finally plugged me in at 1% — to a cable that isn't even plugged into the wall. i hate you. goodbye.

## How it runs

`main.ts` (Node 22, no dependencies) writes the line above to
`/output/entry.txt` with no trailing newline and chmods the file `0o644`
so the grader's reader uid can read it. It never chmods the `/output`
directory itself.

## License

MIT — see `LICENSE`.
