export default function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <div>
          <span>Stride</span>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Stride. Built for teams who ship.
          </p>
        </div>
      </div>
    </footer>
  );
}
