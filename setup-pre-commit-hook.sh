cat > .git/hooks/pre-commit << 'EOF'
#!/usr/bin/env bash
set -e

echo "Running zola build..."
zola build
EOF

chmod +x .git/hooks/pre-commit
