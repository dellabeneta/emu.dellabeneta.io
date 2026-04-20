#!/usr/bin/env bash

BUCKET="s3://emu.dellabeneta.io"

echo ""
echo "═══════════════════════════════════════════"
echo "  RetroVault — Sync de assets e ROMs → S3"
echo "═══════════════════════════════════════════"
echo ""

echo "[ assets/ ]"
aws s3 sync assets/ "$BUCKET/assets/" --size-only
echo ""

echo "[ roms/ ]"
aws s3 sync roms/ "$BUCKET/roms/" --size-only
echo ""

echo "═══════════════════════════════════════════"
echo "  Sync concluído."
echo "═══════════════════════════════════════════"
echo ""
